import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18041Page } from './s18041.page';

describe('S18041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18041Page;
  let fixture: ComponentFixture<S18041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
