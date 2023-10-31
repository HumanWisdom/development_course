import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46056Page } from './s46056.page';

describe('S46056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46056Page;
  let fixture: ComponentFixture<S46056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
