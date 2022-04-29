import { Component } from '@angular/core';
import {BreadcrumbInterface} from "../../../../shared/modules/breadcrumbs/breadcrumb.interface";
import {ArticleInterface} from "../../interfaces/article.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  breadcrumbs: BreadcrumbInterface[] = [
    { title: 'media', url: [] },
    { title: 'news', url: [] },
  ]

  articles: ArticleInterface[] = [
    {
      id: 1,
      title: 'THE SMALLEST AND SHALLOWEST WORLD\'S MAJOR OCANS'.toLowerCase(),
      description:  'The Arctic Ucean Is the smallest andx shallowest of the world\'s five major oceans. It ' +
                    'is also known as the coldest of al the oceans. The International Hydrographic ' +
                    'Organization (IHO) recognizes it as an ocean, although some oceanographers ' +
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aspernatur eveniet excepturi.',
      date: new Date('2021-08-23'),
      imageUrl: 'cold-ocean.jpg'
    },
    {
      id: 2,
      title: 'THE POLAR BEAR AS A HYPERCARNIVOROUS BEAR'.toLowerCase(),
      description:  'The polar bear is a hüpercarnivorous bear whose native range lies largely within ' +
                    'the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and ' +
                    'surroundina land masses. It is the largest extant bear species, as well as the ' +
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aspernatur eveniet excepturi.',
      date: new Date('2021-06-16'),
      imageUrl: 'polar-bear.jpeg'
    },
    {
      id: 3,
      title: ('HUNDREDS OF MORE PRECISE DEFINITIONS OF FOREST ARE ' +
              'USED THROUGHOUT THE WORLD, INCORPORATING FACTORS').toLowerCase(),
      description:  'A forest is a large area of land dominated by trees. Hundreds of more precise ' +
                    'definitions of forest are used througnout the world. Incorporating factors such as ' +
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aspernatur eveniet excepturi.',
      date: new Date('2021-03-04'),
      imageUrl: 'forest.jpg'
    }
  ]

}
