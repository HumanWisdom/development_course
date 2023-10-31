import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45080Page } from './s45080.page';

describe('S45080Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45080Page;
  let fixture: ComponentFixture<S45080Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45080Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45080Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
