import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49098Page } from './s49098.page';

describe('S49098Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49098Page;
  let fixture: ComponentFixture<S49098Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49098Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49098Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
