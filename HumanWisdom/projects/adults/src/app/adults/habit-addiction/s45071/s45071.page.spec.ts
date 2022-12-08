import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45071Page } from './s45071.page';

describe('S45071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45071Page;
  let fixture: ComponentFixture<S45071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
