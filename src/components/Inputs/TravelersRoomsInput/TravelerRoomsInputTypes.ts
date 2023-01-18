import { ButtonInputProps } from '@/components/Inputs/types';

export interface TravelersRoomsInputProps extends ButtonInputProps {
  placeholder?: ITravelersRooms;
  value: ITravelersRooms;
}

export interface ITravelersRooms {
  travelers: string;
  rooms: string;
}
