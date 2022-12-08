import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45136Page } from './s45136.page';

describe('S45136Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45136Page;
  let fixture: ComponentFixture<S45136Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45136Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45136Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
