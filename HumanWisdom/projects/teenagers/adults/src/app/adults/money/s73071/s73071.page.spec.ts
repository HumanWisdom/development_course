import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73071Page } from './s73071.page';

describe('S73071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73071Page;
  let fixture: ComponentFixture<S73071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
