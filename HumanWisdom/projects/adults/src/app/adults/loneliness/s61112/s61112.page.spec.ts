import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61112Page } from './s61112.page';

describe('S61112Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61112Page;
  let fixture: ComponentFixture<S61112Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61112Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61112Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
