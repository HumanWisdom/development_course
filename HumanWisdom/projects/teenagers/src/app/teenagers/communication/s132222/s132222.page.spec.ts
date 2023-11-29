import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132222Page } from './s132222.page';

describe('S132222Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132222Page;
  let fixture: ComponentFixture<S132222Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132222Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132222Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
