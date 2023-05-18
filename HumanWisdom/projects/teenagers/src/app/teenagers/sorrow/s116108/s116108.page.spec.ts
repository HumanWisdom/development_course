import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116108Page } from './s116108.page';

describe('S116108Page', () => {
      
    let component:  S116108Page;
  let fixture: ComponentFixture<S116108Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116108Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116108Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
