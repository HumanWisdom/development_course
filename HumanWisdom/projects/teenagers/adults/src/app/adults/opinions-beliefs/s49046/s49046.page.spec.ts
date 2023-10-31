import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49046Page } from './s49046.page';

describe('S49046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49046Page;
  let fixture: ComponentFixture<S49046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
