import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49026Page } from './s49026.page';

describe('S49026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49026Page;
  let fixture: ComponentFixture<S49026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
