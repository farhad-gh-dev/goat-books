import AppProvider from "./Providers";
import AppRoutes from "./Routes";

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
