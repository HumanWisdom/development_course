import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63067Page } from './s63067.page';

describe('S63067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63067Page;
  let fixture: ComponentFixture<S63067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
