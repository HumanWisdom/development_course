import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132235Page } from './s132235.page';

describe('S132235Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132235Page;
  let fixture: ComponentFixture<S132235Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132235Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132235Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
