import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63067tPage } from './s63067t.page';

describe('S63067tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63067tPage;
  let fixture: ComponentFixture<S63067tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63067tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63067tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
