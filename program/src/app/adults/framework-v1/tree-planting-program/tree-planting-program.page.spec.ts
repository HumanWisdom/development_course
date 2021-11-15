import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TreePlantingProgramPage } from './tree-planting-program.page';

describe('TreePlantingProgramPage', () => {
  let component: TreePlantingProgramPage;
  let fixture: ComponentFixture<TreePlantingProgramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreePlantingProgramPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TreePlantingProgramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
