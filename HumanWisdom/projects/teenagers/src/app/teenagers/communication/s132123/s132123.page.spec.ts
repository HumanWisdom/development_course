import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132123Page } from './s132123.page';

describe('S132123Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132123Page;
  let fixture: ComponentFixture<S132123Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132123Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132123Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
