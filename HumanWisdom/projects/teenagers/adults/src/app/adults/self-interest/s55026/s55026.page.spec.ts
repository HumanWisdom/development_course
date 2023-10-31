import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55026Page } from './s55026.page';

describe('S55026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55026Page;
  let fixture: ComponentFixture<S55026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
