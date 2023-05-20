import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117071Page } from './s117071.page';

describe('S117071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117071Page;
  let fixture: ComponentFixture<S117071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
