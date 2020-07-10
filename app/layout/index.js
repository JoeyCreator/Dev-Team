import { HtmlElement, ContentPlaceholder, Link } from 'cx/widgets';

export default (
    <cx>
        <div class="app">
            <header ws>
                <img class="logo" src="~/assets/img/dev.svg" />

                <Link href="~/" url-bind="url">
                    Home
                </Link>
                <Link href="~/about" url-bind="url">
                    About
                </Link>
            </header>
            <main>
                <ContentPlaceholder />
            </main>
            <footer />
        </div>
    </cx>
);
