import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18022Page } from './s18022.page';

describe('S18022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18022Page;
  let fixture: ComponentFixture<S18022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
