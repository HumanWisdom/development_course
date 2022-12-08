import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61110Page } from './s61110.page';

describe('S61110Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61110Page;
  let fixture: ComponentFixture<S61110Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61110Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61110Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
