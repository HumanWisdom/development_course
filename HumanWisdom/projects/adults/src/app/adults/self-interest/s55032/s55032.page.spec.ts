import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55032Page } from './s55032.page';

describe('S55032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55032Page;
  let fixture: ComponentFixture<S55032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
