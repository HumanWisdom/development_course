import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45067Page } from './s45067.page';

describe('S45067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45067Page;
  let fixture: ComponentFixture<S45067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
