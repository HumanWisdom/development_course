import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73022Page } from './s73022.page';

describe('S73022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73022Page;
  let fixture: ComponentFixture<S73022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
