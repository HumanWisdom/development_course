import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45029Page } from './s45029.page';

describe('S45029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45029Page;
  let fixture: ComponentFixture<S45029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
