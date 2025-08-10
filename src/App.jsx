import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Termsofservice from "./Components/Termsofservice";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Categories from "./Components/Categories";

function App() {
  {/* 
        React Router just swaps the component that needs to be shown based on the URL, while the rest of the page (like your navbar, footer, etc.) stays the same.

        It’s like having different “screens” inside one app without fully reloading the website.

        Think of it like:
          📄 Navbar + Footer → stay the same
          📦 Middle Content Area → changes depending on the page you visit
      
        🛣️ What It Does
            Lets you navigate between different "pages" in a React app.
            Uses URLs to control which component should be shown.
            Updates the browser history so you can go back/forward.
            Prevents full page reload — faster and smoother.(
            It doesn’t reload the whole website — only updates the part that changed.
            This makes navigation super fast because it’s not fetching and reloading the entire HTML every time, just the necessary parts.
          
          )

          1️⃣ Router
          What it is:
          The Router is the "traffic controller" of your app.
          It watches the URL in the browser and decides which component should be shown.

          Common types in React Router:

          BrowserRouter → uses the HTML5 History API (normal URLs like /about) --- Think of BrowserRouter as the main container that enables routing in your app. Without it, Routes, Route, and Link won’t work — because BrowserRouter is the "brain" that watches your browser’s URL and decides what to show. ---
          How it works
          Uses HTML5 History API → pushState, replaceState, and popstate events.
          This means URLs look clean (like /about, /contact) instead of ugly hashes (#/about).

          When the URL changes:

          It doesn’t reload the page.
          It just tells React Router to render the component for that path.

          HashRouter → uses # in the URL (like /index.html#/about)

          Working:
          When you change the URL (via clicking a link or using code), the Router intercepts the change before the browser tries to reload the page.
          It then updates your app's state to show the right component — without reloading.

          2️⃣ Routes
            What it is:
            Routes are the map inside the Router.
            They define which component to show for which URL.

          Working:
          When the URL matches /about, React Router renders the <About /> component.
          It doesn’t fetch a new HTML file — it simply swaps components inside your main layout.


          3️⃣ Link
              What it is:
              A Link is like an <a> tag, but smarter — it tells React Router to change the URL without a full page reload.
              Working:
              It prevents the browser's default behavior (full reload).
              It asks the Router to update the current route internally.
              The Router checks the URL, finds the matching <Route>, and renders that component instantly.


              <BrowserRouter> wraps your whole app to enable routing.
              <Routes> holds all your <Route> definitions.
              
              When you visit /, Home will show
              <Route path="/" element={<MainLayout />}>
              This means MainLayout is the parent, and its <Outlet /> will show nested routes.
              // index prop on the route means It’s the default child route that loads when its parent route is matched — without requiring an extra path segment.
              <Route index element={<Home />}> → Loads Home when the path is /.

              <Route path="about" element={<About />}> → Loads About when the path is /about.

      */}
  return (
    <>
        {/* <Navbar/>
        <Extended_Article/>
        <Home_Section/>
        <About/>
        <Contact/>
        <Categories/>
        <PrivacyPolicy/>
        <Termsofservice/>
        <Footer/> */}

      <BrowserRouter>
          <Routes>

            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/Termsofservice" element={<Termsofservice />} />
              <Route path="/Categories" element={<Categories />} />
            </Route>

          </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
