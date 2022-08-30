import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TreePlantationReportPage } from './tree-plantation-report.page';

describe('TreePlantationReportPage', () => {
  let component: TreePlantationReportPage;
  let fixture: ComponentFixture<TreePlantationReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreePlantationReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TreePlantationReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
