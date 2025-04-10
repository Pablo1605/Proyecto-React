import { Navigate, Route, Routes } from "react-router";
import CursosScreen from "../components/screens/CursosSceen";
import EstudiantesScreen from "../components/screens/EstudiantesScreen";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/cursos" />} />
            <Route path="/cursos" element={<CursosScreen />} />
            <Route path="/estudiantes" element={<EstudiantesScreen />} />
        </Routes>
    );
}

export default AppRoutes;