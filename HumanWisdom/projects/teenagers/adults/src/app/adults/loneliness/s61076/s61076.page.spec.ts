import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61076Page } from './s61076.page';

describe('S61076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61076Page;
  let fixture: ComponentFixture<S61076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
