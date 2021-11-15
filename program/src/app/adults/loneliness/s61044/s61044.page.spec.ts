import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61044Page } from './s61044.page';

describe('S61044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61044Page;
  let fixture: ComponentFixture<S61044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
