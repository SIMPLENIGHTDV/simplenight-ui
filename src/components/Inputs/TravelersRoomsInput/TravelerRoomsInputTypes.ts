import { ButtonInputProps } from '../types';

export interface TravelersRoomsInputProps extends ButtonInputProps {
    placeholder?:ITravelersRooms;
    value: ITravelersRooms;
  }

  interface ITravelersRooms{
    travelers:string;
    rooms:string;
  }
