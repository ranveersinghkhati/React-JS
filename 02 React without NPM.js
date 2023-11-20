<!DOCTYPE html>
<html lang="en">

<head>
    <title> React without NPM (using CDN content delivery network)</title>

    <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

</head>

<body>
    <div id="myDiv">
    </div>

    <script type="text/babel">
        function MyFunction() {
            // functional component
            const xyz = () => alert("hello")
            return <button onClick={xyz}>Click me</button>
        }
        class MyComponent extends React.Component {
            // class component
            render() {
                return <div> Hello from myComponent <MyFunction /></div>
            }
        }
        ReactDOM.render(<MyComponent />, document.getElementById("myDiv"))
    </script>
    <!-- note - use PascalCasr for components -->
</body>

</html>


