import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TreesistersPage } from './treesisters.page';

describe('TreesistersPage', () => {
  let component: TreesistersPage;
  let fixture: ComponentFixture<TreesistersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreesistersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TreesistersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
