// Index.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './allroutes';

type RouteType = {
    path: string;
    component: React.ReactNode;
    roles?: string[];
};

const Index: React.FC = () => {
    return (
            <Router>
                <Routes>
                    {/* Public Routes */}
                    {publicRoutes.map((route: RouteType, idx: number) => (
                        <Route
                            path={route.path}
                            element={route.component}
                            key={idx}
                        />
                    ))}
                </Routes>
            </Router>
    );
};

export default Index;
