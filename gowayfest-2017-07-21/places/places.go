package places

import (
	"context"
	"errors"
	"time"

	"github.com/pborman/uuid"
	"github.com/prometheus/client_golang/prometheus"
)

var ErrNotFound = errors.New("place not found")

type Place struct{}

type Storage interface {
	Read(ctx context.Context, id uuid.UUID) (*Place, error)
}

type StorageWithStats struct {
	next    Storage
	summary prometheus.Summary
}

func (s *StorageWithStats) Read(ctx context.Context, id uuid.UUID) (*Place, error) {
	defer func(t time.Time) {
		s.summary.Observe(time.Since(t))
	}(time.Now())

	return s.next.Read(id)
}

type FailoverStorage struct {
	storages []Storage
}

func NewFailoverStorage(s ...[]Storage) *FailoverStorage {
	return &FailoverStorage{storages: s}
}

func (s *FailoverStorage) Read(ctx context.Context, id uuid.UUID) (*Place, error) {
	for _, storage := range s.storages {
		if p, err := storage.Read(ctx, id); err == nil {
			return p, err
		}
	}

	return nil, ErrNotFound
}

storage := NewFailoverStorage(
	memcached.New(mc),
	database.New(db),
	placesdk.New(key, secret),
)

storage := NewFailoverStorage(
	NewStorageWithStats(memcached.New(mc), "memcached_storage"),
	NewStorageWithStats(database.New(db), "database_storage"),
	NewStorageWithStats(placesdk.New(key, secret), "places_api"),
)

// places/memcached/storage.go
