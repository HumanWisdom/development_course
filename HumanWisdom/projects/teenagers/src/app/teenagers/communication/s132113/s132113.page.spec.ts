import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132113Page } from './s132113.page';

describe('S132113Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132113Page;
  let fixture: ComponentFixture<S132113Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132113Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132113Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
