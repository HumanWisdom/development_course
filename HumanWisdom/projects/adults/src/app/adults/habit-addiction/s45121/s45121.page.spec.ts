import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45121Page } from './s45121.page';

describe('S45121Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45121Page;
  let fixture: ComponentFixture<S45121Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45121Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45121Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
