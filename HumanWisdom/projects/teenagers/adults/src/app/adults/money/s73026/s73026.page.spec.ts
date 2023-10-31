import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73026Page } from './s73026.page';

describe('S73026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73026Page;
  let fixture: ComponentFixture<S73026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
