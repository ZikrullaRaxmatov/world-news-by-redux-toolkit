
function Error() {
    return (
        <div class="alert alert-danger" role="alert">
            404 Error: Page not found!
        </div>
        // <div class="alert alert-danger d-flex align-items-center" role="alert">
        //     <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill" /></svg>
        //     <div>
        //         This site does not exist
        //     </div>
        // </div>
    );
}

export default Error;