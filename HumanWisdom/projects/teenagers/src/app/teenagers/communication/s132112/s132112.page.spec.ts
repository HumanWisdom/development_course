import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132112Page } from './s132112.page';

describe('S132112Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132112Page;
  let fixture: ComponentFixture<S132112Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132112Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132112Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
