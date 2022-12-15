import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48071Page } from './s48071.page';

describe('S48071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48071Page;
  let fixture: ComponentFixture<S48071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
