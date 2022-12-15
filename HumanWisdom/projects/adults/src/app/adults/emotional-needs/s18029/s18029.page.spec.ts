import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18029Page } from './s18029.page';

describe('S18029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18029Page;
  let fixture: ComponentFixture<S18029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
