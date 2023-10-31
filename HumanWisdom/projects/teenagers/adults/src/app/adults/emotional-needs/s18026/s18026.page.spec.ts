import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18026Page } from './s18026.page';

describe('S18026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18026Page;
  let fixture: ComponentFixture<S18026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
