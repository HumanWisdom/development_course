import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45044Page } from './s45044.page';

describe('S45044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45044Page;
  let fixture: ComponentFixture<S45044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
