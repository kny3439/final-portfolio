import { menu } from "./src/js/menu.js";
import { link } from "./src/js/link.js";
import { project } from "./src/js/project.js";
import { bgColor} from "./src/js/bgColor.js";
import { work } from "./src/js/work.js";
import { about } from "./src/js/about.js";


window.addEventListener('load', function () {
    menu()
    link()
    project()
    bgColor()
    work()
    about()
})

