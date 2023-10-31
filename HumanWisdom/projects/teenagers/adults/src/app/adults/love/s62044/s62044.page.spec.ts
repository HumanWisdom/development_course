import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62044Page } from './s62044.page';

describe('S62044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62044Page;
  let fixture: ComponentFixture<S62044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
