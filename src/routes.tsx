import { BrowserRouter, Routes as Rotas, Route } from 'react-router-dom';

import { AddEntities } from "./pages/AddEntities";
import { ListEntities } from "./pages/ListEntities";

import { ListProfessionals } from "./pages/ListProfessionals";
import { AddProfessional } from "./pages/AddProfessional";
 
export const Routes = () => {
    return (
        <BrowserRouter>
          <Rotas>
            <Route path="/ListProfessionals" element={<ListProfessionals />} />
            <Route path="/AddProfessional" element={<AddProfessional />} />
            <Route path="/addEntities" element={<AddEntities />} />
            <Route path="*" element={<ListEntities />} />
          </Rotas>
        </BrowserRouter>
      );
};
 