import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132006Page } from './s132006.page';

describe('S132006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132006Page;
  let fixture: ComponentFixture<S132006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
