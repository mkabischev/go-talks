package placesdk

import (
	"context"

	"github.com/pborman/uuid"
	"junolab.net/ms_geo/places"
)

type Storage struct{}

// Read
func (s *Storage) Read(ctx context.Context, id uuid.UUID) (*places.Place, error) {
	return nil, nil
}
